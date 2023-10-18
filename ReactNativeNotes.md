# React Native Notes

## Basic React Concepts

**Components**

- component classes extend React.Component
- define:
	render() {
		return (
			// JSX codeblock
		)
	}
- use:
	ReactDOM.render(<componentName />, document.getElementById('divIdName'));

**Component State**

- JS object
- describes current state of component (data, UI-state, etc)
- can be updated over time (modal or output data could change)
- ex:
	state = {
		name: 'Sam',
		age: 22
	}


**JSX**

- must have single root element (empty tags work)
- hyphens not allowed, many html and SVG elements are written in camelcase
- uses className instead of class
- can insert java script between { and }

https://react.dev/learn/writing-markup-with-jsx 

React Native

running on iOS: https://reactnative.dev/docs/running-on-device?os=macos&platform=ios

cross platform development: https://reactnative.dev/architecture/xplat-implementation



note: reviewed PRs and prototypes made by team members.

