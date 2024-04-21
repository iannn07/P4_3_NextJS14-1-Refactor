import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { use, useState } from 'react';

export const useNavigation = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  return {
    loading,
    open,
    setOpen,
    active,
    setActive,
    router,
    params,
    searchParams,
    pathName,
    setLoading,
  };
};
