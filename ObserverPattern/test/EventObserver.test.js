const assert = require('assert').strict;

import EventObserver from '../EventObserver';

const observer = new EventObserver();

const fn = () => {};

observer.subscribe(fn);

observer.unsubscribe(fn);

assert.strictEqual(observer.observers.length, 0);


