import PropTypes from "prop-types";
import { SectionStyled } from "./Section.styled";
const Section = ({children}) => {
    return (
        <SectionStyled>
            <h2 className="feedbackTitle">Please leave feedback</h2>
            {children}
        </SectionStyled>
    )
}

Section.propType = {
    children: PropTypes.node.isRequired,
}
export default Section;