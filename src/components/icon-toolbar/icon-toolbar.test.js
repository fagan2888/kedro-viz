import React from 'react';
import IconToolbar, { mapStateToProps, mapDispatchToProps } from './index';
import { mockState, setup } from '../../utils/state.mock';
import { getInitialState } from '../app/load-data';
import formatData from '../../utils/format-data';
import loremIpsum from '../../utils/data/lorem-ipsum.mock';

describe('IconToolbar', () => {
  it('renders without crashing', () => {
    const wrapper = setup.mount(<IconToolbar />);
    expect(wrapper.find('.pipeline-icon-button').length).toBe(3);
  });

  const getState = visible =>
    getInitialState(formatData(loremIpsum), {
      visible
    });

  it('hides both buttons when visible prop is false for each of them', () => {
    const wrapper = setup.mount(
      <IconToolbar />,
      getState({
        themeBtn: false,
        labelBtn: false,
        exportBtn: false
      })
    );
    expect(wrapper.find('.pipeline-icon-button').length).toBe(0);
  });

  it('hides one button when visible prop is false for one of them', () => {
    const wrapper = setup.mount(
      <IconToolbar />,
      getState({
        labelBtn: false
      })
    );
    expect(wrapper.find('.pipeline-icon-button').length).toBe(2);
  });

  it('maps state to props', () => {
    const expectedResult = {
      graphSize: expect.objectContaining({
        height: expect.any(Number),
        width: expect.any(Number),
        marginx: expect.any(Number),
        marginy: expect.any(Number)
      }),
      textLabels: expect.any(Boolean),
      theme: expect.stringMatching(/light|dark/),
      visible: expect.objectContaining({
        themeBtn: expect.any(Boolean),
        labelBtn: expect.any(Boolean),
        exportBtn: expect.any(Boolean)
      })
    };
    expect(mapStateToProps(mockState.lorem)).toEqual(expectedResult);
  });

  it('maps dispatch to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).onToggleTextLabels(false);
    expect(dispatch.mock.calls[0][0]).toEqual({
      textLabels: false,
      type: 'TOGGLE_TEXT_LABELS'
    });

    mapDispatchToProps(dispatch).onToggleTheme('light');
    expect(dispatch.mock.calls[1][0]).toEqual({
      theme: 'light',
      type: 'TOGGLE_THEME'
    });
  });
});
