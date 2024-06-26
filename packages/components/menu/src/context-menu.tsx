import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { useMultiComponentStyle, omitThemeProps } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"
import type { FC } from "react"
import type { MenuProps } from "./menu"
import { Menu } from "./menu"

type ContextMenuContext = {
  styles: Record<string, CSSUIObject>
}

const [ContextMenuProvider, useContextMenu] = createContext<ContextMenuContext>(
  {
    strict: false,
    name: "ContextMenuContext",
  },
)

export { useContextMenu }

type ContextMenuOptions = {}

export type ContextMenuProps = Omit<MenuProps, "trigger"> &
  ThemeProps<"ContextMenu"> &
  ContextMenuOptions

/**
 * `ContextMenu` is triggered by a right click and displays a menu at the pointer's position.
 *
 * @see Docs https://yamada-ui.com/components/overlay/context-menu
 */
export const ContextMenu: FC<ContextMenuProps> = (props) => {
  const [styles, mergedProps] = useMultiComponentStyle("ContextMenu", props)
  const { ...rest } = omitThemeProps(mergedProps)

  return (
    <ContextMenuProvider value={{ styles }}>
      <Menu trigger="contextmenu" {...rest} />
    </ContextMenuProvider>
  )
}
