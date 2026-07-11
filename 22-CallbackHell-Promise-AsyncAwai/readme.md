# JavaScript Asynchronous Programming

This project demonstrates different ways JavaScript executes and manages tasks, from synchronous execution to modern `async/await`.

## Topics Covered

- **Synchronous Execution**
  - Code runs line by line.
  - Each task finishes before the next begins.

- **Asynchronous Execution**
  - Non-blocking operations using `setTimeout()`.
  - JavaScript continues executing while waiting.

- **Callback Hell**
  - Nested callbacks used to control execution order.
  - Difficult to read and maintain.

- **Promises**
  - Handle asynchronous operations more cleanly.
  - States: **Pending → Fulfilled (Resolved) / Rejected**.
  - Uses `.then()` for chaining and `.catch()` for error handling.

- **Async / Await**
  - Cleaner syntax built on Promises.
  - `async` functions return a Promise.
  - `await` pauses execution until a Promise settles.
  - `try...catch` handles errors.

## Concepts Learned

- Blocking vs Non-blocking execution
- Execution order of asynchronous code
- Callback-based asynchronous programming
- Promise creation with `resolve()` and `reject()`
- Promise chaining
- Error handling with `.catch()`
- Writing asynchronous code using `async` and `await`

## Mini Examples

- Sequential synchronous tasks
- Independent asynchronous tasks using `setTimeout()`
- Callback Hell implementation
- Promise-based chore execution
- Async/Await version of the same workflow

---

**Learning Outcome:** Understand how JavaScript handles asynchronous operations and why modern applications prefer **Promises** and **Async/Await** over nested callbacks.