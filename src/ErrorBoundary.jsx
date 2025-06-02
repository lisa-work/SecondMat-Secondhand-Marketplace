import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Caught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-red-600">
            <title>Error!</title>
            <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
            <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[170px] font-bold text-center text-green-900 flex flex-col justify-center items-center mt-30">Oops! Something Went Wrong</h1>
                    <p className="text-md text-center text-green-800">{this.state.error?.message}</p>
                    <Link to="/home">
                        <Button className="mt-10 bg-green-700 hover:bg-green-800">Go Back Home</Button>
                    </Link>
            </div>  
        </div>
      )
    }

    return this.props.children
  }
}
