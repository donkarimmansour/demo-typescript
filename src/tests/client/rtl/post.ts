import Posts from "@/client/ui/containers/blog/posts/Posts"
import Post, { PostProps } from "@/client/ui/layouts/card/post/Post"
import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"



describe('post components', async () => {


    it("should render post component", () => {

        const data: PostProps = {
            id: "sreing",
            title: "sreing",
            body: "sreing",
            updatedAt: "sreing",
        }

        render(<Post { ...data } />)

        expect(getByRole('paragraph', { level: 1, name: id })).toBeInTheDocument()
        expect(getByRole('paragraph', { level: 1, name: title })).toBeInTheDocument()
        expect(getByRole('paragraph', { level: 1, name: body })).toBeInTheDocument()
        expect(getByRole('paragraph', { level: 1, name: updatedAt })).toBeInTheDocument()

    })




    it("should render posts components", () => {

        // await userEvent.setup()
        // await userEvent.click(title)


        render(<Posts { ...posts } />)

        const posts = [{
            id: "sreing",
            title: "sreing",
            body: "sreing",
            updatedAt: "sreing",
        }]

        expect(posts).toHaveLength(5)


        const section = screen.getByRole("region")
        expect(section).toBeInTheDocument()

        const articles = getAllByRole('article')
        expect(articles).toHaveLength(5)


        articles.forEach((article) => {
            // You can import wihthin from @testing-library/react
            const { getByRole, queryByRole } = within(article)

            const { id, title, body, updatedAt } = article

            expect(queryByRole('paragraph', { name: id })).not.toBeInTheDocument()
            expect(getByRole('paragraph', { name: title })).toBeInTheDocument()
            expect(getByRole('paragraph', { name: body })).toBeInTheDocument()
            expect(getByRole('paragraph', { name: updatedAt })).toBeInTheDocument()

        })

    })




})


