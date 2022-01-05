import axios from 'axios';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { isFormValidated } from '../../utils/formUtils';
import { addToast } from '../../utils/toastNotifications';
import { endpoints } from '../../utils/urls';

const Twit = (props: any) => {
  const [localState, setLocalState]: any = useState({
    liked: false,
  });

  const likeHandler = async (ev: any) => {
    setLocalState({ liked: !localState.liked });
    let url = `${endpoints.twits.actions.like(props.uuid)}`;
    console.log(url);

    const payload = {
      state: localState.liked,
    };

    try {
      const response: any = await axios.post(url, payload);
      if (response.status === 'error') {
        addToast(response.message, 'error');
      } else {
        addToast(response.message, 'error');
      }
    } catch (error: any) {
      addToast(error.message || error, 'error');
    } finally {
      // setIsLoading(false);
    }
  };

  const postCommentHandler = async (ev: any) => {
    if (!isFormValidated(`form-${props.uuid}-comment-box`)) {
      return;
    }

    ev.preventDefault();
    // setIsLoading(true);
    //if login success, get user detail
    let url = `${endpoints.twits.actions.comment(props.uuid)}`;
    console.log(url);

    const payload = {
      email: localState.email,
      password: localState.password,
    };
    try {
      const response: any = await axios.post(url, payload);
      if (response.responsecode === 401) {
        addToast(response.message, 'error');
      } else {
        addToast(response.message, 'error');
      }
    } catch (error: any) {
    } finally {
      // setIsLoading(false);
    }
  };

  const deleteHandler = async (ev: any) => {
    let url = `${endpoints.twits.manage.delete}`;
    console.log(url);

    const payload = {
      email: localState.email,
      password: localState.password,
    };

    try {
      const response: any = await axios.post(url, payload);
      if (response.responsecode === 401) {
        addToast(response.message, 'error');
      } else {
        addToast(response.message, 'error');
      }
    } catch (error: any) {
      addToast(error.message || error, 'error');
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div id={`twit-${props.uuid}`} className='card pb-4 justify-content-between'>
      <div className='card-head px-4'>
        <b style={{ fontSize: '15px', fontWeight: 700 }}>{props.posterName}</b>
      </div>
      <div
        className='d-flex px-4 align-items-center justify-content-center card-img'
        style={{
          width: '500px',
          height: '350px',
          backgroundColor: 'silver',
        }}
      >
        <img src={props.image} alt='icon' />
      </div>
      <div className='card-actions d-flex justify-content-between align-items-end px-4'>
        <div className='d-flex align-items-end'>
          <button id={`likebutton-${props.uuid}`} className='like-button' onClick={likeHandler}>
            <img
              src={require('../../assets/ArrowRight.svg').default}
              alt='caution'
              className='ms-3 mb-1'
            />
          </button>
          <span>{`${props.numberOfLikes} likes`}</span>
        </div>

        <Dropdown className='mx-1'>
          <Dropdown.Toggle variant='' className='p-0' style={{ height: '100%' }}>
            <span>|</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className='drop-down-menu-custom-1'>
            <Dropdown.Item
              as='div'
              className='border-bottom py-2'
              style={{ fontSize: '14px' }}
              onClick={deleteHandler}
            >
              <div>Delete Post</div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span>{`Posted at ${new Date(props.createdAt).toLocaleDateString()}`}</span>
      </div>
      <div className='card-body justify-content-between mt-auto px-4'>
        <b style={{ fontSize: '16px', fontWeight: 600 }}>{props.caption}</b>
        <form id={`form-${props.uuid}-comment-box`}>
          <input type='text' />
          <button onClick={postCommentHandler}></button>
        </form>
      </div>
    </div>
  );
};

export default Twit;
