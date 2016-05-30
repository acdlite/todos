import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import App from '../App';
import VisibleTodoList from '../VisibleTodoList';

test('passes filter param to VisibleTodoList', t => {
  const wrapper = shallow(<App params={{ filter: 'some-filter' }} />);
  const todoList = wrapper.find(VisibleTodoList);
  t.is(todoList.prop('filter'), 'some-filter');
});
