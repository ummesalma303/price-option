// import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <>
             <li className="hover:bg-blue-700 px-7 py-1"><a href={route.path}>{ route.name}</a></li>
        </>
    );
};

// Link.propTypes = {
    
// };

export default Link;