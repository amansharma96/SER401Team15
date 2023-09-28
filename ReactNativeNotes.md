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

- uses className instead of class
- can insert java script between { and }

