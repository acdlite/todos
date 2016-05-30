import test from 'ava';
import { loadState, saveState } from '../localStorage';

test('saveState serializes state into localStorage', t => {
  const tmp = global.localStorage;
  let serializedState;
  global.localStorage = {
    setItem(key, state) {
      if (key === 'state') {
        serializedState = state;
      }
    },
  };
  saveState({ foo: 'bar' });
  t.is(serializedState, '{"foo":"bar"}');
  global.localStorage = tmp;
});

test('loadState deserializes state from localStorage', t => {
  const tmp = global.localStorage;
  global.localStorage = {
    getItem(key) {
      if (key === 'state') {
        return '{"foo":"bar"}';
      }
      return undefined;
    },
  };
  t.deepEqual(loadState(), { foo: 'bar' });
  global.localStorage = tmp;
});

test('loadState returns undefined if localStorage has no state', t => {
  const tmp = global.localStorage;
  global.localStorage = {
    getItem() {
      return undefined;
    },
  };
  t.is(loadState(), undefined);
  global.localStorage = tmp;
});
