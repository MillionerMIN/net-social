import AvatarIcon from '../../../assets/icons/avatar/avatar_icon.png';
import style from './Message.module.scss';

export type MessagePropsType = {
  avatar?: string;
  name?: string;
  message: string;
  time?: string;
};

function Message(props: MessagePropsType) {
  const { avatar = AvatarIcon, name, message, time } = props;
  return (
    <div className={style.messages}>
      <img src={avatar} alt='avatar' className={style.avatar} />
      <div className={style.angel}></div>
      <div className={style.content}>
        <div className={style.name}>{name}</div>
        <div className={style.text}>{message}</div>
        <div className={style.time}>{time}</div>
      </div>
    </div>
  );
}

export default Message;
