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

###### TASK📝
Implement or use any React list virtualization package and create pinterest like thing.

==<u>**DATE: 6/8/25**</u>==

11. We can use either fetch or axios in React-query.

12. In react-query when we fetch data of any query-key then that data gets store inside cache and if within 5min we called another instance of same query key then the cache data gets updated. But, if we don't do another call within 5mins then the data from cache get collected by a garbage collector.

13. In React Query, when we fetch data using a query key, that data is cached.
If we call the same query key again within the cacheTime (default is 5 minutes, i.e., 1000 * 60 * 5), then:
✅ The cached data is used immediately.
✅ The background fetch (re-fetch) may or may not happen    depending on options like staleTime, refetchOnWindowFocus, etc.
If the query is inactive (i.e., not used in any component) for longer than cacheTime:
⛔️ The cached data is removed from memory by the Garbage Collector of React Query.
`Active Query` - A query that is currently mounted in some component.
`Inactive Query` -	A query that is not being used by any component right now.

14. A mounted component using useQuery keeps the query active. `Active queries are never garbage collected`, no matter how low the cacheTime is.
Therefore, reducing cacheTime on a mounted component will not trigger a new fetch or automatic deletion.

🧠`TIP` : Be capable of reading API docs.

15. For using react-query in our app we need to wrap our app component using queryClientProvider component.

16. Query also do optimistic update using cache.
17. How to write our own cache❓

###### TASK:📝
*Implement Infinite Scroll in coin list*

##### INR-USD updation of different component of a same page.

`Method-1`: Make a common global state variable in parent component and pass it as a prop to the required child.
![alt text](image.png)
But, when the application become complex then passing out this props to lower level could be difficult because parent most(Global) component have their own things to manage.
Example:
![alt text](image-2.png)
Here, we need to pass the state among whole chain and this is again a very `Big Problem` for code maintainability and etc. (==Prop-Drilling== ❓)

`Method-2`
We can reflect the update change of A-Comp into B-comp by returning callbacks to their parents. Like we have done during form submit in hangman game.
![alt text](image-1.png)
But this is also a to much call, and doesn't give us any simple solution for this it is complex to do in react.


![alt text](image-3.png)
![alt text](image-4.png)

💡SOLUTION - Maintain the state at global store
![alt text](image-5.png)

✅==React Context API== -: React from some of the latest versions, started supporting an in house solution for better `state management`. This is called as context API. Context api helps us to describe a state storage and then help us to access it from the component hierarchy without prop drilling.

- React gives us a `createContext()` function and this function returns an Context object.
```bash
import { createContext } from "react";
export const CurrencyContext= createContext();
```
- Context object gives a `provider component` and it is just like BrowserRouter of react-router thats why we need to wrap with it to the upper most parent component from where we want to use the state from, and due to which in the complete hierarchy of the parent component we can access the Context-Object.
- In the provider, we can add a value prop, which takes an object and inside this object we can store any state or functions, that we want to make accessible inside our Parent component(ex-HomePage)
```bash
<CurrencyContext.Provider value={{currency,setCurrency}}>
      <HomePage/>
</CurrencyContext.Provider>
```
- Child Comps don't need to pass props instead can use the global state using useContext(it returns value object of provider comp) hook.
```bash
function Navbar() {
 const { setCurrency } = useContext(CurrencyContext);
 return (
      <> 
        ....
      </>
 );
 }

```
- Context object gives us a provider comp as well as data store i.e context(value object for global state)
- We can also use multiple global context at diffrent levels by wrapping up the comps
![alt text](image-6.png)

- ContextAPI is in-built in React not in ReactDOM only.

There are some disadvantages of contextAPI like in large complex project we need to do this wrap-up and 
