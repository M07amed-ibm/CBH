# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
I first want to start my explanation with the functionality:
-the function aims to return a candidate key according to the following:
-if there is no event passed to the function return "0" as the trivial key.
-else if there is an event do the following checks:
    -if there is a partition key property return it or return the stringified JSON of it, if it's greater than the max length(256) return the hashed version from it.
    -if there is no partition key return the hashed value according to the stringified event object or event string.

**that's why in my solution I wrote it as clear as the described in words above mean while the provided solution was having a lot of if and else which could lead to a lot of time to understand it by another developer.