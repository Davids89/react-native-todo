import React from 'react'
import {render} from '@testing-library/react-native'
import Home from 'screens/home'

test('render correctly', () => {
  const {toJSON} = render(<Home />)

  expect(toJSON()).toMatchSnapshot()
})