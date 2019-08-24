import React from "react";
import Axios from "axios";

const HOCFetchData = WrappedComponent =>{
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                dataFetch: []
            };
        }

        componentDidMount(){
            const{
                location: {pathname}
            } = this.props;
            this.fetchData(pathname);

            //this.fetchData('/posts');
        }

        componentWillReceiveProps(nextProps){
            const{
                location:{pathname}
            } = nextProps;
            this.fetchData(pathname);
        }

        fetchData(url){
            Axios.get(`https://5d60ae27c2ca490014b27096.mockapi.io/api/v1/${url}`).then(({data})=>{
                this.setState({dataFetch: data});
            })
        }

        render(){
            console.log("this.props.children.HOCFetchData", this.props);
            return(
                <WrappedComponent dataFetch={this.state.dataFetch}>
                    {this.props.children}
                </WrappedComponent>
            );
        }
    };
};

export default HOCFetchData