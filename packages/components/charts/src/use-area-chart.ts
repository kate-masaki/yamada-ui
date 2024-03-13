import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { getCSS, useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useId, useMemo, useState } from "react"
import type { AreaChart, AreaProps, DotProps } from "recharts"
import type { AreaGradientProps } from "./area-chart-gradient"
import type { AreaSplitProps } from "./area-chart-split"
import { getComponentProps } from "./chart-utils"
import type {
  CurveType,
  AreaChartSeries,
  AreaChartType,
  AreaChartUIProps,
  ChartPropGetter,
  DotUIProps,
  LayoutType,
  ReferenceLineUIProps,
  RequiredChartPropGetter,
} from "./chart.types"
import {
  areaChartProperties,
  dotProperties,
  areaProperties,
} from "./chart.types"

export type UseAreaChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `dataKey` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: AreaChartSeries[]
  /**
   *  Controls how chart areas are positioned relative to each other
   *
   * @default `default`
   */
  type?: AreaChartType
  /**
   *  Props passed down to recharts `AreaChart` component.
   */
  areaChartProps?: AreaChartUIProps
  /**
   *  Props passed down to all dots. Ignored if `withDots={false}` is set.
   */
  dotProps?: DotUIProps
  /**
   *  Props passed down to all active dots. Ignored if `withDots={false}` is set.
   */
  activeDotProps?: DotUIProps
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: LayoutType
  /**
   *  Determines whether the chart area should be represented with a gradient instead of the solid color.
   */
  withGradient?: boolean
  /**
   *  Determines whether dots should be displayed.
   *
   * @default true
   */
  withDots?: boolean
  /**
   *  Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   *  Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: CurveType
  /**
   *  Stroke width for the chart areas.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   *  Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   *  A tuple of colors used when `type="split"` is set, ignored in all other cases.
   *
   * @default '["red.400", "green.400"]'
   */
  splitColors?: [string, string]
  /**
   *  Offset for the split gradient. By default, value is inferred from `data` and `series` if possible. Must be generated from the data array with `getSplitOffset` function.
   */
  splitOffset?: number
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineUIProps[]
  /**
   *  Controls fill opacity of all areas.
   *
   * @default 0.4
   */
  fillOpacity?: number | [number, number]
}

export type UseAreaChartProps = UseAreaChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useAreaChart = ({
  data,
  series,
  type,
  areaChartProps: _areaChartProps = {},
  activeDotProps: _activeDotProps = {},
  dotProps: _dotProps = {},
  layoutType = "horizontal",
  withGradient: withGradientProp,
  withDots = true,
  withActiveDots = true,
  curveType = "monotone",
  strokeWidth = 2,
  connectNulls = true,
  fillOpacity = 0.4,
  splitColors = ["#ee6a5d", "#5fce7d"],
  splitOffset,
  referenceLineProps,
  styles,
}: UseAreaChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)

  const splitId = `${uuid}-split`
  const stacked = type === "stacked" || type === "percent"
  const withGradient =
    typeof withGradientProp === "boolean"
      ? withGradientProp
      : type === "default"
  const shouldHighlight = highlightedArea !== null

  const areaColors: CSSUIProps["var"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        __prefix: "ui",
        name: `area-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const areaSplitColors: CSSUIProps["var"] = useMemo(
    () =>
      splitColors.map((color, index) => ({
        __prefix: "ui",
        name: `area-split-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [splitColors],
  )

  const referenceLineColors: CSSUIProps["var"] = useMemo(
    () =>
      referenceLineProps
        ? referenceLineProps.map(({ color }, index) => ({
            __prefix: "ui",
            name: `reference-line-${index}`,
            token: "colors",
            value: color ?? "transparent",
          }))
        : [],
    [referenceLineProps],
  )

  const areaVars: CSSUIProps["var"] = useMemo(() => {
    return [
      ...areaColors,
      ...areaSplitColors,
      ...referenceLineColors,
      { name: "fill-opacity", value: fillOpacity },
    ]
  }, [areaColors, areaSplitColors, referenceLineColors, fillOpacity])

  const [areaChartProps, areaChartClassName] = getComponentProps<Dict, string>(
    [_areaChartProps, areaChartProperties],
    styles.areaChart,
  )(theme)

  const [activeDotProps, _activeDotClassName] = getComponentProps<Dict, string>(
    [_activeDotProps, dotProperties],
    styles.activeDot,
  )(theme)

  const [dotProps, _dotClassName] = getComponentProps<Dict, string>(
    [_dotProps, dotProperties],
    styles.dot,
  )(theme)

  const areaClassName = getCSS(styles.area)(theme)

  const defaultSplitOffset = useMemo(() => {
    if (series.length === 1) {
      const dataKey = series[0].dataKey as string

      const dataMax = Math.max(...data.map((item) => item[dataKey]))
      const dataMin = Math.min(...data.map((item) => item[dataKey]))

      if (dataMax <= 0) return 0
      if (dataMin >= 0) return 1

      return dataMax / (dataMax - dataMin)
    }

    return 0.5
  }, [data, series])

  const areaPropsList = useMemo(
    () =>
      series.map((props, index) => {
        const {
          dataKey,
          strokeDasharray,
          activeDot: _activeDot = {},
          dot: _dot = {},
        } = props
        const id = `${uuid}-${dataKey}`
        const color = `var(--ui-area-${index})`
        const dimmed = shouldHighlight && highlightedArea !== dataKey
        const [rest, className] = getComponentProps(
          [props, areaProperties],
          areaClassName,
        )(theme)

        let activeDot: DotProps | boolean

        if (withActiveDots) {
          const [rest, activeDotClassName] = getComponentProps(
            [_activeDot, dotProperties],
            _activeDotClassName,
          )(theme)

          activeDot = {
            className: activeDotClassName,
            stroke: color,
            r: 4,
            ...activeDotProps,
            ...rest,
          } as DotProps
        } else {
          activeDot = false
        }

        let dot: DotProps | boolean

        if (withDots) {
          const [rest, dotClassName] = getComponentProps(
            [
              {
                fill: color,
                strokeWidth: 20,
                ..._dot,
              },
              dotProperties,
            ],
            _dotClassName,
          )(theme)

          dot = {
            className: dotClassName,
            fillOpacity: dimmed ? 0 : 1,
            r: 4,
            ...dotProps,
            ...rest,
          } as DotProps
        } else {
          dot = false
        }

        return {
          id,
          dimmed,
          className,
          ...rest,
          color,
          strokeDasharray,
          dataKey,
          activeDot,
          dot,
        }
      }),
    [
      areaClassName,
      _activeDotClassName,
      activeDotProps,
      _dotClassName,
      dotProps,
      highlightedArea,
      series,
      shouldHighlight,
      theme,
      uuid,
      withActiveDots,
      withDots,
    ],
  )

  const getAreaChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof AreaChart>,
    ComponentPropsWithoutRef<typeof AreaChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, areaChartClassName),
      data,
      stackOffset: type === "percent" ? "expand" : undefined,
      layout: layoutType,
      ...props,
      ...areaChartProps,
    }),
    [areaChartClassName, data, type, layoutType, areaChartProps],
  )

  const getAreaSplitProps: ChartPropGetter<
    "div",
    Partial<AreaSplitProps>,
    AreaSplitProps
  > = useCallback(
    (props = {}) => ({
      id: splitId,
      offset: splitOffset ?? defaultSplitOffset,
      fillOpacity: "var(--ui-fill-opacity)",
      ...props,
    }),
    [defaultSplitOffset, splitId, splitOffset],
  )

  const getAreaProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<AreaProps, "ref">
  > = useCallback(
    ({ index, className: classNameProp, ...props }, ref = null) => {
      const {
        id,
        color,
        dimmed,
        className,
        dataKey,
        strokeDasharray,
        activeDot,
        dot,
        ...rest
      } = areaPropsList[index]

      return {
        ref,
        className: cx(classNameProp, className),
        id,
        activeDot,
        dot,
        name: dataKey as string,
        type: curveType,
        dataKey,
        fill: type === "split" ? `url(#${splitId})` : `url(#${id})`,
        strokeWidth,
        stroke: color,
        isAnimationActive: false,
        connectNulls,
        stackId: stacked ? "stack" : undefined,
        fillOpacity: dimmed ? 0 : 1,
        strokeOpacity: dimmed ? 0.5 : 1,
        strokeDasharray,
        ...(props as Omit<AreaProps, "dataKey">),
        ...rest,
      }
    },
    [
      areaPropsList,
      connectNulls,
      curveType,
      splitId,
      stacked,
      strokeWidth,
      type,
    ],
  )

  const getAreaGradientProps: ChartPropGetter<
    "div",
    Partial<AreaGradientProps>,
    AreaGradientProps
  > = useCallback(
    (props = {}) => ({
      withGradient,
      fillOpacity: "var(--ui-fill-opacity)",
      ...props,
    }),
    [withGradient],
  )

  return {
    getAreaChartProps,
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    areaVars,
    setHighlightedArea,
  }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>