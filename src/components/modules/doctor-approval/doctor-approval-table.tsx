import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DoctorReviewSheet from "./doctor-review-sheet";
import { useGetAllDoctors } from "@/hooks";


export default function DoctorApprovalTable() {

  const {data, isPending} = useGetAllDoctors();

  console.log(data);

  const doctors = data?.data || [];

  console.log("doctors:", doctors);

  if(isPending) {
    return <p>Loading....</p>
  }


  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>License No.</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact no.</TableHead>
            <TableHead>Specialization.</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            doctors.map((doctor) => (
              <TableRow>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.licenseNumber}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.contactNumber ? doctor.contactNumber : "-"}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell className="text-right">
                  <DoctorReviewSheet />
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}