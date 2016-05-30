import test from 'ava';
import { addTodo, setVisibilityFilter, toggleTodo } from '../';

test('addTodo creates actions with incrementing ids', t => {
  t.deepEqual(addTodo('Write action creators'), {
    type: 'ADD_TODO',
    id: 0,
    text: 'Write action creators',
  });
  t.deepEqual(addTodo('Write reducers'), {
    type: 'ADD_TODO',
    id: 1,
    text: 'Write reducers',
  });
  t.deepEqual(addTodo('Write tests'), {
    type: 'ADD_TODO',
    id: 2,
    text: 'Write tests',
  });
});

test('setVisibilityFilter creates action with filter property', t => {
  t.deepEqual(setVisibilityFilter('SHOW_ALL'), {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_ALL',
  });
});

test('toggleTodo creates action with id property', t => {
  t.deepEqual(toggleTodo('123'), {
    type: 'TOGGLE_TODO',
    id: '123',
  });
});
