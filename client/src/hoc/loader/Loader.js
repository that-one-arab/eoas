import "./loader.css"

const Loader = (props) => {
    return (
      <>
        <div className={ props.isLoading ? "loader" : ""}>
            <div className={ props.isLoading ? "spinner-border" : ""} role="status">
              {/* <span className="sr-only loader-icon">Loading...</span> */}
            </div>
        </div>
        {
          props.children
        }
      </>
    )
}

export default Loader;