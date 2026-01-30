import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface NotificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NotificationModal = ({ open, onOpenChange }: NotificationModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe for Updates</DialogTitle>
          <DialogDescription>
            Get notified about new video uploads and when I go live.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name"/>
            </div>
             <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your Email Address" type="email"/>
            </div>
            <div>
                <Label>Updates</Label>
                <div className="flex flex-col space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="updates-videos" />
                        <Label htmlFor="updates-videos">New Video Uploads</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="updates-live" />
                        <Label htmlFor="updates-live">Live on Webcam</Label>
                    </div>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <Checkbox id="age-verification" />
                <Label htmlFor="age-verification" className="text-xs text-muted-foreground">
                    I confirm that I am 18 years of age or older.
                </Label>
            </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
