
import { List, Avatar } from 'antd';
import { useSelector, useDispatch, useStore } from "react-redux"


const PostListView = () => {
    const store = useStore()
    var data = store.getState().poster.value
    console.log('store = ', data)

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
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