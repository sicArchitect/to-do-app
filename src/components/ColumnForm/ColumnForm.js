import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  let listId = props.columnId;

  const handleSubmit = (e) => {
    e.preventDefault();
    //OLD props.action({ title: title, icon: icon });
    //NEW- redux
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <p className={styles.titleText}>Title:</p>
      <TextInput
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={'Add title'}
        type="text"
      ></TextInput>
      <p className={styles.iconText}>Icon:</p>
      <TextInput
        className={styles.input}
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        placeholder={'Add icon'}
        type="text"
      ></TextInput>
      <Button className={styles.button}>ADD COLUMN</Button>
    </form>
  );
};

export default ColumnForm;
