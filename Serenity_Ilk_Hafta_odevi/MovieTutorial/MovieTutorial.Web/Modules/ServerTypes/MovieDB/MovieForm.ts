import { MovieCastEditor } from "@/MovieDB/MovieCast/MovieCastEditor";
import { TextAreaEditor, IntegerEditor, EnumEditor, LookupEditor, MultipleImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { MovieKind } from "./MovieKind";

export interface MovieForm {
    Title: TextAreaEditor;
    Description: TextAreaEditor;
    CastList: MovieCastEditor;
    Storyline: TextAreaEditor;
    Year: IntegerEditor;
    ReleaseDate: TextAreaEditor;
    Runtime: IntegerEditor;
    Kind: EnumEditor;
    GenreList: LookupEditor;
    PrimaryImages: MultipleImageUploadEditor;
    GalleryImages: MultipleImageUploadEditor;
}

export class MovieForm extends PrefixedContext {
    static readonly formKey = 'MovieDB.Movie';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MovieForm.init)  {
            MovieForm.init = true;

            var w0 = TextAreaEditor;
            var w1 = MovieCastEditor;
            var w2 = IntegerEditor;
            var w3 = EnumEditor;
            var w4 = LookupEditor;
            var w5 = MultipleImageUploadEditor;

            initFormType(MovieForm, [
                'Title', w0,
                'Description', w0,
                'CastList', w1,
                'Storyline', w0,
                'Year', w2,
                'ReleaseDate', w0,
                'Runtime', w2,
                'Kind', w3,
                'GenreList', w4,
                'PrimaryImages', w5,
                'GalleryImages', w5
            ]);
        }
    }
}

[MovieKind]; // referenced types