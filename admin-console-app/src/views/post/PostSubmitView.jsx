import React, { useState, createContext, useContext } from 'react'
import { Spin, Button, Input, Form, Row, Col, Card, Space } from 'antd';
import usePost from './../../hooks/usePost.js'
import { useNavigate } from "react-router-dom";

const PostSubmitView = () => {

    const navigate = useNavigate()

    const { article, setArticle, submit } = usePost();

    const [spinning, setSpinning] = useState(false);

    const handelChangeTitle = (e) => {
        setArticle({
            title: e.target.value,
            content: article.content
        })
    }
    const handelChangeContent = (e) => {
        setArticle({
            title: article.title,
            content: e.target.value
        })
    }
    const handelSubmit = async (e) => {
        try {
            setSpinning(true)
            await submit();
            navigate('/home/post/view', { replace: true })
        } catch {
            // promotes error
        } finally {
            setSpinning(false)
        }
    }

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <>
            <Spin spinning={spinning} fullscreen />
            <Form className='PostForm'
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal">
                <Form.Item label="Title">
                    <Input type='text' name="title" onChange={(e) => { handelChangeTitle(e) }} />
                </Form.Item>
                <Form.Item label="Content">
                    <Input type="text" name="content" onChange={(e) => { handelChangeContent(e) }} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type='primary' onClick={handelSubmit} >Submit</Button>
                    </Space>
                </Form.Item>
            </Form>

        </>
    )
}


export default PostSubmitView