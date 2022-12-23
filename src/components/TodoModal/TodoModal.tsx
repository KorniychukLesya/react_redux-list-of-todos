import { useDispatch } from 'react-redux';
import { Loader } from '../Loader';
import { useAppSelector } from '../../app/hooks';
import { actions as todoActions } from '../../features/currentTodo';

export const TodoModal: React.FC = () => {
  const todo = useAppSelector(state => state.currentTodo);
  const dispatch = useDispatch();
  const removeTodo = () => dispatch(todoActions.removeTodo());
  // const [user, setUser] = useState<User>( );

  if (!todo) {
    return null;
  }

  const { id, title, completed } = todo;

  // useEffect(() => {
  //   if (userId) {
  //     getUser(userId)
  //     .then(curentuser => {
  //       setUser(curentuser);
  //       console.log(curentuser);
  //     });
  //   }

  // }, []);

  return (
    <>
      <div className="modal is-active" data-cy="modal">
        <div className="modal-background" />

        <Loader />

        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              Todo #
              {id}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={removeTodo}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {title}
              s
            </p>

            <p className="block" data-cy="modal-user">
              {!completed
                ? (<strong className="has-text-danger">Planned</strong>)
                : (<strong className="has-text-success">Done</strong>)}
              {' by '}
              {/* <a href={`mailto: ${user?.email}`}>{user?.name}</a> */}
            </p>
          </div>
        </div>
      </div>
    </>

  );
};
