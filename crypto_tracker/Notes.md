1. Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and node.js with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

`Q) But, if under the hood axios uses XMLHttpRequest then how it can be promise based? because XMLHttpRequest uses callback❓`
🔧 How Axios wraps XMLHttpRequest with Promises
Axios internally wraps XMLHttpRequest in a JavaScript Promise. Here's how it works conceptually:
✅ Axios's job is to:
- Use XMLHttpRequest to make a request (on the browser).
- Set up event listeners (like onload, onerror, etc.).
- Resolve or reject a Promise based on the response.

🧠Conceptual Example:
```
function customAxios(config) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve({
          data: JSON.parse(xhr.responseText),
          status: xhr.status,
          statusText: xhr.statusText,
          headers: xhr.getAllResponseHeaders(),
        });
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`));
      }
    };

    xhr.onerror = function () {
      reject(new Error('Network error'));
    };

    xhr.send(config.data || null);
  });
}


customAxios({ method: 'GET', url: 'https://api.example.com' })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

This is one of the reasons Axios is popular — it hides complexity and gives a cleaner API.


2. In case of Axios we don't need to parse the response using JSON for getting actual data while in case of fetchAPI we need to do this.

3. React query have different things like, AutoRetry mechanism, handle loading and error states automatically using hooks etc. While if we want to execute this things using axios then we need to execute these things manually.

==Note== - Read the some main features of react-query like Parallel-queries, Paginated-query, caching, retry. We can also implement these things by manually by ownself also.

4. React-query divides the API call into two category i.e. Query and Mutations and this is a prog term not just related to react-query.

`Query -`
a) Read/fetch.
b) Cache-able.

`Mutations -` 
a) Delete/Update/Create
b) Used in  api calls that make changes to B/E.
c) Useful in Optimistic update. 
d) No-cacheing.


5. Component folder - Contains the UIs code.
6. Services folder - Contains the logic of any kind of data fetching or mutations.
7. Helper/Utility folder - Contains the constants.

8. 🧠`Infinite Scroll`: In infinite scrolling if we add elements more n more as we scroll-up so, by this DOM becomes heavy and if dom tree starts becoming heavy then it will take more memory of RAM which can cause a performance issue.

So, the solution is ==List-Virtualization== where we just creates fix set of nodes and store data into those nodes only which are inside the window's screen and then when new data gets donloaded then we just shifts the data instead of creating new node. So, the DOM doesn't get any new or extra memory space.
And here when we scroll-down then we again downloads the data and shifts it similarly or we can also cache it.

9. `Tip`:We can implement list virtualization by ourself or can use packages.
Sometimes it's important to know the concept and it's working and use any package of it. Becoz it is not neccessary to implement everything by your own Instead just know that Where to use? and How to use? bcoz at the end it is somewhere a DSA logic.

10. 📝`TASK` - Implement or use any React list virtualization package and create pinterest like thing.