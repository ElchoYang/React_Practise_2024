import React, { useState, createContext, useEffect } from 'react'
import { Button, Input, Form, Drawer, Space } from 'antd';
import usePost from './../../hooks/usePost.js'
import { useDispatch, useSelector } from 'react-redux';

const PostSubmitView = () => {

    const { article, setArticle, closeForm, handelSubmit } = usePost();

    const poster = useSelector((state) => state.poster)

    useEffect(() => {
        setArticle(poster.currentPost)
    }, [poster.currentPost])

    const handelChangeTitle = (e) => {
        setArticle({
            id: article.id,
            title: e.target.value,
            content: article.content
        })
    }
    const handelChangeContent = (e) => {
        setArticle({
            id: article.id,
            title: article.title,
            content: e.target.value
        })
    }


    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <>
            <Drawer title="Save Your Post" onClose={closeForm} open={poster.isOpen}>
                <Form className='PostForm'
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal">
                    {/* <Form.Item label="Id">
                        <Input type='text' name="id" value={article?.id} />
                    </Form.Item> */}
                    <Form.Item label="Title">
                        <Input type='text' name="title" value={article?.title} onChange={(e) => { handelChangeTitle(e) }} />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input type="text" name="content" value={article?.content} onChange={(e) => { handelChangeContent(e) }} />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Space>
                            <Button type='primary' onClick={handelSubmit} >Submit</Button>
                        </Space>
                    </Form.Item>
                </Form>

            </Drawer>

        </>
    )
}


export default PostSubmitView