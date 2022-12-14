import './Root.scss';
import '@fontsource/roboto-mono/latin-400.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-800.css';

import * as React from 'react';
import { QueryClientProvider } from 'react-query';
import { RouteObject } from 'react-router';
import { HashRouter as Router, useRoutes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { About } from 'src/components/about/About';
import Loading from 'src/components/Loading';
import { Head } from 'src/components/shared/Head';
import { queryClient } from 'src/misc/query';

import { actions, initialState } from '../store';
import APIConfig from './APIConfig';
import APIDiscovery from './APIDiscovery';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import Loading2 from './Loading2';
import s0 from './Root.module.scss';
import SideBar from './SideBar';
import StateProvider from './StateProvider';
import StyleGuide from './StyleGuide';

const { lazy, Suspense } = React;

const Connections = lazy(() => import('./Connections'));
const Config = lazy(() => import('./Config'));
const Logs = lazy(() => import('./Logs'));
const Proxies = lazy(() => import('./proxies/Proxies'));
const Rules = lazy(() => import('./Rules'));

const routes = [
  { path: '/', element: <Home /> },
  { path: '/connections', element: <Connections /> },
  { path: '/configs', element: <Config /> },
  { path: '/logs', element: <Logs /> },
  { path: '/proxies', element: <Proxies /> },
  { path: '/rules', element: <Rules /> },
  { path: '/about', element: <About /> },
  process.env.NODE_ENV === 'development' ? { path: '/style', element: <StyleGuide /> } : false
].filter(Boolean) as RouteObject[];

function RouteInnerApp() {
  return useRoutes(routes);
}

function SideBarApp() {
  return (
    <>
      <APIDiscovery />
      <SideBar />
      <div className={s0.content}>
        <Suspense fallback={<Loading2 />}>
          <RouteInnerApp />
        </Suspense>
      </div>
    </>
  );
}

function App() {
  return useRoutes([
    { path: '/backend', element: <APIConfig /> },
    { path: '*', element: <SideBarApp /> }
  ]);
}

const Root = () => (
  <ErrorBoundary>
    <RecoilRoot>
      <StateProvider initialState={initialState} actions={actions}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <div className={s0.app}>
              <Head />
              <Suspense fallback={<Loading />}>
                <App />
              </Suspense>
            </div>
          </Router>
        </QueryClientProvider>
      </StateProvider>
    </RecoilRoot>
  </ErrorBoundary>
);

export default Root;



window.onload = function startup() {
  const el = document.getElementById('app');
  el.addEventListener('touchstart', onTouchStart, false);
  el.addEventListener('touchmove', onTouchMove, false);
  el.addEventListener('touchend', onTouchEnd, false);
};


const touchData = { touching: false, trace: [] };

function onTouchStart(evt) {
  if (evt.touches.length !== 1) {
    touchData.touching = false;
    touchData.trace = [];
    return;
  }
  touchData.touching = true;
  touchData.trace = [{ x: evt.touches[0].screenX, y: evt.touches[0].screenY }];
}


function onTouchMove(evt) {
  if (!touchData.touching) return;
  touchData.trace.push({
    x: evt.touches[0].screenX,
    y: evt.touches[0].screenY
  });
}

function onTouchEnd() {
  if (!touchData.touching) return;
  const trace = touchData.trace;
  touchData.touching = false;
  touchData.trace = [];
  handleTouch(trace);  //判断touch类型并调用适当回调
}
function handleTouch(trace) {
  const tags = ['/','/proxies','/rules','/connections','/configs','/logs']
  const start = trace[0];
  const end = trace[trace.length - 1];
  const tag =  window.location.hash.slice(1)
  const index = tags.indexOf(tag)
  console.log(index,tag,tags.length)
  if (index === 3) return;
  if (end.x - start.x > 200 && index > 0) {
     window.location.hash=tags[index-1];
  }else if (end.x - start.x < -200 && index < tags.length-1) {
     window.location.hash=tags[index+1];
    if (index === -1){
      window.location.hash=tags[index+2]
    }
      }
};