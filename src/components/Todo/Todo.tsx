import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { Todo as Todotype } from '../../types/Todo';
import { actions as todoActions } from '../../features/currentTodo';
// import { useAppSelector } from '../../app/hooks';

interface Props {
  todo: Todotype;
}

export const Todo: React.FC<Props> = ({ todo }) => {
  const { id, title, completed } = todo;
  const dispatch = useDispatch();
  const setTodo = (curentTodo: Todotype) => dispatch(
    todoActions.setTodo(curentTodo),
  );

  return (
    <tr data-cy="todo" key={id}>
      <td className="is-vcentered">{id}</td>
      <td className="is-vcentered">
        {completed && (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        )}
      </td>

      <td className="is-vcentered is-expanded">
        <p className={classNames('has-text-success',
          { 'has-text-danger': !completed })}
        >
          {title}
        </p>
      </td>

      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => setTodo(todo)}
        >
          <span className="icon">
            <i className="far fa-eye" />
          </span>
        </button>
      </td>
    </tr>

  );
};
