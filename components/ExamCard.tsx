import { CornerDownRight, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

interface ExamCardProps extends CardProps {
  TitleValue: string;
  RedirectValue : string;
  Day : boolean,
}

export default function ExamCard({ className, TitleValue,RedirectValue,Day ,...props }: ExamCardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="flex gap-1">{TitleValue}{Day ? <Sun className="text-yellow-500" fill="white" /> : <Moon className="text-black" fill="white" />}</CardTitle>
        <CardDescription>Attempt this paper as mock test.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`\\mock-test\\${RedirectValue}`} className="w-full">
          <Button className="w-full font-bold bg-stone-900 text-white hover:bg-stone-700">
            <CornerDownRight className="mr-2 h-4 w-4" /> Solve
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
