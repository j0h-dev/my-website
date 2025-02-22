import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

const isDevelopmentMode = import.meta.env.DEV

function RootComponent() {
  return (
    <>
      <Outlet />
      {isDevelopmentMode && <TanStackRouterDevtools position="bottom-right" />}
    </>
  )
}
