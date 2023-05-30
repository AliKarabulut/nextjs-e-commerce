import { deviceActions } from "./stores/device";
import { store } from "./stores";

export const middleware = (request) => {
  const requestHeaders = new Headers(request.headers);
  const device = requestHeaders
    .get("user-agent")
    .match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );
  if (device) {
    store.dispatch(deviceActions.setDevice(true));
  }
};

export const config = {
  matcher: "/",
};
