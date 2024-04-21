import { readUserSession } from '@/lib/action/action';
import { getViews } from '@/lib/action/action-hooks';

export default async function Views() {
  const { data: views } = await getViews();
  const { data: userSession } = await readUserSession();

  return (
    <div>
      <h1 className='text-3xl font-bold'>Views</h1>
      {userSession.session != null ? (
        <table className='mt-5 w-56'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Created At</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {views?.map((view, index) => (
              <tr key={index}>
                <td>{view.id}</td>
                <td>{new Date(view.created_at).toLocaleDateString()}</td>
                <td>{view.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className='mt-5 text-xl'>Login to see views</h2>
      )}
    </div>
  );
}
