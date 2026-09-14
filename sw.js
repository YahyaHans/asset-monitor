self.addEventListener('fetch', (event) => {
  // 允许所有网络请求正常通过，不拦截实时行情
  event.respondWith(fetch(event.request));
});