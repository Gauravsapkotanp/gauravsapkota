import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import AdminLayout from '@/Layouts/AdminLayout';

export default function PostIndex({ posts, session }) {
    const deletePost = async (id) => {
        Inertia.delete(`/posts/${id}`);
    }

  return (
    <AdminLayout>
        <div style={{ marginTop: '100px' }}>
            
            <Link href="/posts/create" className="btn btn-success btn-md mb-3">TAMBAH POST</Link>
            
            {session.success && (
                <div className="alert alert-success border-0 shadow-sm rounded-3">
                    {session.success}
                </div>
            )}

            <div className="card border-0 rounded shadow-sm">
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">TITLE</th>
                                <th scope="col">CONTENT</th>
                                <th scope="col">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                        { posts.map((post, index) => (
                            <tr key={ index }>
                                <td>{ post.title }</td>
                                <td>{ post.content }</td>
                                <td className="text-center">
                                    <Link href={`/posts/${post.id}/edit`} className="btn btn-sm btn-primary me-2">EDIT</Link>
                                    <button onClick={() => deletePost(post.id)} className="btn btn-sm btn-danger">DELETE</button>
                                </td>
                            </tr>
                        )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AdminLayout>
  )
}