export const createCall = (tabId: number, callNumber: string): Promise<void> =>
  new Promise((resolve) =>
    chrome.tabs.executeScript(
      tabId,
      {
        code: `(function() {
            const script = document.createElement('script');
            script.textContent = "window._extension.onCall('${callNumber}')";
            (document.head||document.documentElement).appendChild(script);
            script.remove();
          })()
          `,
      },
      () => resolve()
    )
  )
