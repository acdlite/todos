import test from 'ava';
import visibilityFilterReducer from '../visibilityFilter';
import { setVisibilityFilter } from '../../actions';

test('SET_VISIBILITY_FILTER sets the visibility filter', t => {
  let state = visibilityFilterReducer(undefined, {});
  state = visibilityFilterReducer(state, setVisibilityFilter('SOME_FILTER'));
  t.is(state, 'SOME_FILTER');
  state = visibilityFilterReducer(state, setVisibilityFilter('SOME_OTHER_FILTER'));
  t.is(state, 'SOME_OTHER_FILTER');
});
