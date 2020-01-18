import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

let event: Event;

if (typeof Event === 'function') {
  event = new Event('reactRouteChange');
} else {
  event = document.createEvent('Event');
  event.initEvent('reactRouteChange', true, true);
}

history.listen(() => {
  document.dispatchEvent(event);
});

export default history;
