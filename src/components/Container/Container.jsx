/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Container = (props) => {
    return (
        <section className={props.class1}>
            <div className="container-xxl">{props.children}</div>
        </section>
    );
};

export default Container;