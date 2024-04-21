'use client';

import { UP } from './icons/UP';
import { vote } from '../lib/action/action-hooks';

export default function VoteButton({
  id,
  unvote,
}: {
  id: number;
  unvote: boolean;
}) {
  return (
    <div>
      <div
        className={unvote ? 'rotate-180' : ''}
        onClick={() => vote(id, unvote)}
      >
        <UP />
      </div>
    </div>
  );
}
