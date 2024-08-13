import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Select,
  SelectItem,
} from "@tremor/react";

import { api } from "~/trpc/react";
import Image from "next/image";
import { useEffect } from "react";

const WaitlistTable = () => {
  const { data: users, isLoading } = api.user.fetchWaitlistUsers.useQuery();
  const updateUserRole = api.user.updateUserRole.useMutation({
    onSuccess: () => {
      window.location.reload();
    },
  });

  const handleUpdateUserRole = async (email: string, role: string) => {
    await updateUserRole.mutateAsync({ email, role });
  };

  if (users?.length === 0) {
    return (
      <div className="p-[60px] w-full flex justify-center items-center">
        No users in waitlist
      </div>
    );
  }

  return (
    <Table>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div>
                <Image
                  src={user.image ?? ""}
                  alt={user.name ?? ""}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
            </TableCell>
            <TableCell>
              <div>{user.email}</div>
            </TableCell>
            <TableCell>
              <div>{user.name}</div>
            </TableCell>
            <TableCell>
              <Select
                placeholder="Select Role"
                value={user.role}
                onValueChange={(role) =>
                  handleUpdateUserRole(user.email ?? "", role)
                }
              >
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="waitlist">Waitlist</SelectItem>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WaitlistTable;
