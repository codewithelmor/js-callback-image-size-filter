# Callbacks

In JavaScript, **`Callbacks`**, **`Promises`**, and **`Observables`** are all mechanisms used to handle asynchronous operations. Let's briefly explore each of them:

1. **`Callback Functions`**:

* Callbacks are functions that are passed as arguments to another function, and they are executed after the completion of some asynchronous operation.
* They are a traditional way of handling asynchronous code in JavaScript.
* Callbacks can lead to callback hell or the pyramid of doom, where multiple nested callbacks can make code hard to read and maintain.

Example:

```javascript
function fetchData(callback) {
  // Simulating an asynchronous operation (e.g., AJAX request)
  setTimeout(function () {
    const data = "Data from server";
    callback(data);
  }, 1000);
}

fetchData(function (result) {
  console.log(result);
});
```

2.  **`Promises`**:

* Promises were introduced to address the callback hell problem and provide a cleaner way to handle asynchronous operations.
* A Promise is an object representing the eventual completion or failure of an asynchronous operation.
* It has states: **`pending`**, **`fulfilled`**, or **`rejected`**.
* Promises have **`then`** and **`catch`** methods to handle successful and failed outcomes.

Example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., AJAX request)
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data from server");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

fetchData()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
```

3. **`Observables`**:

* Observables come from the Reactive Extensions (RxJS) library and are part of reactive programming.
* They represent a stream of data over time and can be used for handling events and asynchronous tasks.
* They can have multiple values over time, and you can subscribe to changes.
* Observables offer more powerful features compared to promises, such as cancellations and composition of multiple streams.

Example (using RxJS):

```javascript
import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  // Simulating an asynchronous operation (e.g., AJAX request)
  setTimeout(() => {
    const success = true;

    if (success) {
      observer.next("Data from server");
      observer.complete();
    } else {
      observer.error("Error fetching data");
    }
  }, 1000);
});

const subscription = observable.subscribe(
  result => console.log(result),
  error => console.error(error),
  () => console.log("Observable completed")
);
```

In summary, callbacks are the simplest form, promises offer a more structured approach, and observables provide powerful features for handling asynchronous operations, especially in the context of reactive programming. The choice between them depends on the specific requirements of your application and the complexity of the asynchronous tasks you need to handle.
