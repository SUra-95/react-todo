import PropTypes from 'prop-types';
import "./TaskCard.css";
import Tag from "../components/Tag";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";

const TaskCard = ({ title, tags, handleDelete, handleEdit, id }) => {

    const selectTag = (tag) => {
        // console.log(tag);
    }

    return (
        <article className="task_card">
            <p className="task_text">{title} {id}</p>

            <div className="task_card_bottom_line">
                <div className="task_card_tags">
                    {tags.map((tag, index) =>
                        <Tag key={index} tagName={tag} selectTag={selectTag} selected no={index} />
                    )}
                </div>
                <div>
                    <div className="task_delete" onClick={() => handleDelete(id)}>
                        <img className="delete_icon" src={deleteIcon} alt="" />{id}
                    </div>
                    <div className="task_edit" onClick={() => handleEdit(id)}>
                        <img className="edit_icon" src={editIcon} alt="" />{id}
                    </div>
                </div>

            </div>
        </article>
    );
};

TaskCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    // handleDelete: PropTypes.string.isRequired,
    // index: PropTypes.number.isRequired,

};

export default TaskCard;
