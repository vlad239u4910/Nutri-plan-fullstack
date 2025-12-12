"use client";

import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Calendar } from "./calendar";
import { CalendarIcon } from "lucide-react";

type ControlledDatePickerProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
};

const ControlledDatePicker = <T extends FieldValues>({
  name,
  label,
}: ControlledDatePickerProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, ...restField },
        fieldState: { error },
      }) => (
        <Popover>
          {!!label && (
            <Label className="mb-2" htmlFor={name}>
              {label}
            </Label>
          )}
          <div className="flex flex-col gap-2">
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !value && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value ? format(value, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            {!!error && (
              <p className="text-destructive text-sm">{error.message}</p>
            )}
          </div>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={value}
              onSelect={onChange}
              {...restField}
            />
          </PopoverContent>
        </Popover>
      )}
    />
  );
};

export { ControlledDatePicker };
