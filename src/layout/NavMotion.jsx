import PropTypes from 'prop-types';
import React from 'react';

// third-party
import { motion } from 'framer-motion';

//-----------------------|| ANIMATION FOR CONTENT ||-----------------------//

const NavMotion = ({ children }) => {

    return (
        <motion.div animate={{ scale: [0.4, 1]}}
            transition= {{
                default: { duration: 0.3 },
                type: 'spring',
                stiffness: 200
            }}
        >
            {children}
        </motion.div>
    );
};

NavMotion.propTypes = {
    children: PropTypes.node
};

export default NavMotion;
