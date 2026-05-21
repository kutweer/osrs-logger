"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const goalSchema = z.object({
  title: z.string().min(1, "Title required").max(100),
  type: z.enum([
    "OBTAIN_ITEM",
    "COMPLETE_CATEGORY",
    "COLLECTION_LOG_PERCENT",
    "BOSS_KC",
    "CLUE_COUNT",
    "SKILL_LEVEL",
    "SKILL_XP",
    "CUSTOM",
  ]),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]),
  targetProgress: z.coerce.number().min(1),
  currentProgress: z.coerce.number().min(0),
  notes: z.string().max(500).optional(),
  targetSkill: z.string().optional(),
  targetBoss: z.string().optional(),
  customTarget: z.string().optional(),
});

type GoalFormData = z.infer<typeof goalSchema>;

interface GoalFormProps {
  onSubmit: (data: GoalFormData) => void | Promise<void>;
  defaultValues?: Partial<GoalFormData>;
  loading?: boolean;
  className?: string;
}

export function GoalForm({
  onSubmit,
  defaultValues,
  loading,
  className,
}: GoalFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<GoalFormData>({
    resolver: zodResolver(goalSchema),
    defaultValues: {
      type: "CUSTOM",
      priority: "MEDIUM",
      currentProgress: 0,
      targetProgress: 1,
      ...defaultValues,
    },
  });

  const type = watch("type");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
    >
      {/* Title */}
      <div className="space-y-1.5">
        <Label htmlFor="title">Goal title</Label>
        <Input
          id="title"
          placeholder="e.g. Complete Chambers of Xeric log"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-xs text-destructive">{errors.title.message}</p>
        )}
      </div>

      {/* Type & Priority */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label>Goal type</Label>
          <Select
            defaultValue={defaultValues?.type ?? "CUSTOM"}
            onValueChange={(v) => setValue("type", v as GoalFormData["type"])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="OBTAIN_ITEM">Obtain item</SelectItem>
              <SelectItem value="COMPLETE_CATEGORY">Complete category</SelectItem>
              <SelectItem value="COLLECTION_LOG_PERCENT">Log %</SelectItem>
              <SelectItem value="BOSS_KC">Boss KC</SelectItem>
              <SelectItem value="CLUE_COUNT">Clue count</SelectItem>
              <SelectItem value="SKILL_LEVEL">Skill level</SelectItem>
              <SelectItem value="SKILL_XP">Skill XP</SelectItem>
              <SelectItem value="CUSTOM">Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>Priority</Label>
          <Select
            defaultValue={defaultValues?.priority ?? "MEDIUM"}
            onValueChange={(v) => setValue("priority", v as GoalFormData["priority"])}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LOW">Low</SelectItem>
              <SelectItem value="MEDIUM">Medium</SelectItem>
              <SelectItem value="HIGH">High</SelectItem>
              <SelectItem value="CRITICAL">Critical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Type-specific fields */}
      {(type === "SKILL_LEVEL" || type === "SKILL_XP") && (
        <div className="space-y-1.5">
          <Label>Skill</Label>
          <Select onValueChange={(v) => setValue("targetSkill", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select skill" />
            </SelectTrigger>
            <SelectContent>
              {["Attack","Defence","Strength","Hitpoints","Ranged","Prayer","Magic",
                "Cooking","Woodcutting","Fletching","Fishing","Firemaking","Crafting",
                "Smithing","Mining","Herblore","Agility","Thieving","Slayer","Farming",
                "Runecraft","Hunter","Construction"].map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {type === "BOSS_KC" && (
        <div className="space-y-1.5">
          <Label>Boss name</Label>
          <Input
            placeholder="e.g. Zulrah"
            {...register("targetBoss")}
          />
        </div>
      )}

      {type === "CUSTOM" && (
        <div className="space-y-1.5">
          <Label>Target description</Label>
          <Input
            placeholder="e.g. Get 200M total XP"
            {...register("customTarget")}
          />
        </div>
      )}

      {/* Progress */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="currentProgress">Current progress</Label>
          <Input
            id="currentProgress"
            type="number"
            min={0}
            {...register("currentProgress")}
          />
          {errors.currentProgress && (
            <p className="text-xs text-destructive">{errors.currentProgress.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="targetProgress">Target</Label>
          <Input
            id="targetProgress"
            type="number"
            min={1}
            {...register("targetProgress")}
          />
          {errors.targetProgress && (
            <p className="text-xs text-destructive">{errors.targetProgress.message}</p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-1.5">
        <Label htmlFor="notes">Notes (optional)</Label>
        <Textarea
          id="notes"
          placeholder="Add context, strategy, or reminders…"
          {...register("notes")}
          className="min-h-[80px]"
        />
        {errors.notes && (
          <p className="text-xs text-destructive">{errors.notes.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="gold"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Saving…" : "Create goal"}
      </Button>
    </form>
  );
}
