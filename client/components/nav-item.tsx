export type NavigationItemProps = {
    href?: string
    name: string
    current: boolean
    onclick?: () => void
    variant: 'auth' | 'link'
}
export default function NavItem({ item }: { item: NavigationItemProps }) {
    if (item.variant === 'auth') {
        return (
            <form action={item.onclick} key={item.name} className={
                item.current
                    ? 'px-3 bg-gray-900 text-white font-medium rounded-md'
                    : 'text-gray-300 hover:text-white '
            }>
                <button type="submit">{item.name}</button>
            </form>
        )
    } else if (item.variant === 'link') {
        return (
            <a
                key={item.name}
                href={item.href}
                onClick={item.onclick}
                aria-current={item.current ? 'page' : undefined}
                className={
                    item.current
                        ? 'px-3 bg-gray-900 text-white font-medium rounded-md'
                        : 'text-gray-300 hover:text-white '
                }
            >
                {item.name}
            </a>
        )
    }
}
