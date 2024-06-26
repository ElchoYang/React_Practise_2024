import { useState, useEffect } from 'react'
import { List, Avatar, Skeleton, Button } from 'antd';
import { useSelector, useDispatch, useStore } from "react-redux"
import usePost from './../../hooks/usePost.js'

const PostListView = () => {
    const posts = useSelector(state => state.poster.list)

    const dispatch = useDispatch();
    const { editAsync, deleteAsync, getPostList, openForm, closeForm, removeItem } = usePost();

    useEffect(() => {
        dispatch(getPostList())
    }, [])

    return (
        <>
            <Button type="primary" onClick={() => { openForm(false, null) }}>
                Add Post
            </Button >
            <List
                itemLayout="horizontal"
                dataSource={posts}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 5,
                }}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[<Button type="primary" onClick={() => { openForm(true, item) }} >edit</Button>, <Button type="primary" danger onClick={() => { removeItem(item.id) }} >delete</Button>]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={item.title}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />


        </>
    )

}


export default PostListView