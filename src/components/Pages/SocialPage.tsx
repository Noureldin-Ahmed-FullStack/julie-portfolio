import { useUserContext } from "../../context/UserContext";
import { useSocialPosts } from "../../hooks/FetchSocial";
// import { SocialPost } from "../../types";
import AddPost from "../addPost";
import { SinglePost } from "../ui/SinglePost";
import { ScaleLoader } from 'react-spinners'
import { Button } from "@mui/material";
// import CenteredPage from "../CenteredPage";
// const postsArray: SocialPost[] = [{
//   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// }, {
//   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   image: "https://ssniper.sirv.com/Images/other%20projects/compressed-image%20(1).jpg",
//   comments: [
//     {
//       userPFP: "https://ssniper.sirv.com/Images/my%20portfolio/pfp.jpg",
//       content: "test",
//       createdBy: "nour",
//       createdAt: "3 hours ago"
//     },
//     {
//       userPFP: "https://ssniper.sirv.com/Images/my%20portfolio/pfp.jpg",
//       content: "Hello world",
//       createdBy: "nour",
//       createdAt: "3 hours ago"
//     },
//   ]
// }, {
//   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// },]
export default function SocialPage() {
  const { userData } = useUserContext()
  // const { data, isLoading } = useSocialPosts(1);
  const { data, isLoading, fetchNextPage, hasNextPage } = useSocialPosts()
  console.log(data);

  return (
    <div className="grow">
      <div className="mt-7 flex justify-center ">
        <div className="flex flex-col maxWidth50vw ">
          {userData?._id && userData?.role == "admin" ? <AddPost /> : <></>}
          {isLoading ? (
            <div className="w-full flex justify-center items-center mt-32">
              <ScaleLoader color="#212121" />
            </div>
          ) : (
            data?.pages.map((item) => (
              item.posts.map((post: any, index: number) => (
                <div className="my-4" key={index}>
                  {post && <SinglePost {...post} />}
                </div>
              ))
            ))
          )}
          {hasNextPage && <Button className="!my-5" variant="outlined" color="inherit" onClick={() => fetchNextPage()}>
            Load more
          </Button>}
        </div>
      </div>
    </div>
  )
}
